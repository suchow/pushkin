.. _development:

Contributing to Pushkin
=======================
Pushkin is 100% open-source. We love it when people come together to help fix bugs, build features, and make Pushkin better for everyone. If you'd like to contribute, feel free to open a pull request. The Pushkin project is split into several repos, each corresponding to a an NPM module. Issues and general project direction is tracked via GitHub's project boards and issues. An example of all of them working together is available via the ``pushkin generate`` command. Below is a general overview.

1. `Client <https://github.com/pushkin-consortium/pushkin-client>`_ (:ref:`Docs <pushkin_client>`)
A module that provides simplified methods for making calls to a Pushkin API and unpacking data sent back from a worker. Note that built-in functions assume the API has corresponding default routes enabled to handle such requests.

2. `API <https://github.com/pushkin-consortium/pushkin_api>`_ (:ref:`Docs <pushkin_api>`)
Essentially a mini-server designed with the use case of interfacing between Pushkin Client and Pushkin Worker via RabbitMQ.

3. `CLI <https://github.com/pushkin-consortium/pushkin-cli>`_ (:ref:`Docs <pushkin_cli>`)
Installable via NPM. Adds a ``pushkin`` command to the path when installed globally and makes working with Pushkin much easier.

4. `Worker <https://github.com/pushkin-consortium/pushkin-worker/>`_ (:ref:`Docs <pushkin_worker>`)
Receives messages from RabbitMQ and runs whatever functionality it's told to run, sending the result back through the queue it came from. Designed to be on the receiving end of a Pushkin API. Comes with built-in simple functions that most users will probably want, like "getAllStimuli".

5. `JSPsych <https://github.com/pushkin-consortium/pushkin-jspsych/>`_ (:ref:`Docs <pushkin_jspsych>`)
The Pushkin JSPsych repo simply makes a few small changes to the official JSPsych library so that it can be bundled together as if it's an NPM module. In order for it to be globally accessible to plugins as they expect, the import must be assigned to window.jsPsych.