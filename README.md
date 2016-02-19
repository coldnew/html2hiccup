# html2hiccup
[![Circle CI](https://circleci.com/gh/coldnew/html2hiccup/tree/master.svg?style=svg)](https://circleci.com/gh/coldnew/html2hiccup/tree/master)
[![Dependencies Status](https://jarkeeper.com/coldnew/html2hiccup/status.svg)](https://jarkeeper.com/coldnew/html2hiccup)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/coldnew/pangu.clj/master/LICENSE)

Convert HTML to Hiccup syntax on-the-fly.

This app is entirely client-side rednering, powered by ClojureScript and [hickory](https://github.com/davidsantiago/hickory).

See [Online DEMO](https://coldnew.github.io/html2hiccup/) here.

### Development

1. Install needed css/js by bower
   ```bash
   $ bower install
   ```

2. Start the `dev` task. In a terminal run:
    ```bash
    $ boot dev
    ```
    This will give you a  Hoplon development setup with:
    - auto compilation on file changes
    - audible warning for compilation success or failures
    - auto reload the html page on changes
    - Clojurescript REPL

3. Go to [http://localhost:3000][2] in your browser.

4. If you edit and save a file, the task will recompile the code and reload the
   browser to show the updated version.

### Production

1. Run the `prod` task. In a terminal run:
    ```bash
    $ boot prod
    ```

2. The compiled files will be on the `target/` directory. This will use
   advanced compilation and prerender the html.

## License

Copyright © 2016 Yen-Chin, Lee <<coldnew.tw@gmail.com>>

Distributed under the [MIT License](http://opensource.org/licenses/MIT).
