# ramda-learning-template

A simple template to get myself set up for coding and testing with JavaScript and specifically Ramda. 
Based on a stripped down version of Bob Pace's [ramda-demo](https://github.com/bobpace/ramda-demo) repo, which
accompanies his great [Ramda Demo](https://www.youtube.com/watch?v=digajAH_5IU) video, which I recommend you
watch ... at least a couple of times.

It incorporates elements for a smooth workflow:

- Ramda itself
- Babel for the ES2015 syntax
- Mocha for the testing framework
- should for the assertion library

The idea is that you set up the workflow within a dual-pane window in tmux, and run Mocha in "watch" mode
in one of the panes, modifying the code in the other. The tests will be rerun when the file is saved.
