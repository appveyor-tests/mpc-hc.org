# A simple converter to change all `#XXX` into `a` tags to our Trac

module Jekyll

    class TracLinks < Converter
        safe true
        priority :low

        def matches(ext)
            ext =~ /(^\.html|^\.md)$/i
        end

        def output_ext(ext)
            ".html"
        end

        def convert(content)
            content
              .gsub(/(\#)(\d+)/, "<a href=\"https://trac.mpc-hc.org/intertrac/%23\\2\">\\1\\2</a>")
        end

    end

end
