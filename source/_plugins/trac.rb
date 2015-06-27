# A simple converter to change all `Ticket #XXX` and `Ticket #XXX, #XXX` links to `a` tags

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
              .gsub(/(Ticket \#\d+)(, )(\#)(\d+)/,
                    '\1\2<a href="https://trac.mpc-hc.org/intertrac/%23\4">\3\4</a>')
              .gsub(/(Ticket \#)(\d+)/,
                    'Ticket <a href="https://trac.mpc-hc.org/intertrac/%23\2">#\2</a>')
        end

    end

end
