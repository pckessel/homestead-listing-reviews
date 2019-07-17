# TODO

# FURTHER RESEARCH
  When running the npm script "setUpData", the node thread runs the module and if the module has any interaction with the Postgres DB, then after the module is done executing, it seemingly waits until the Postgres Idle Pool times out before going on to the next synchronous action. It does this for each module which interacts with the psql db. When the idle pool timeout is set to 30000, the script takes quite a while to run. When the idle timeout is lowered to 5000, the script executes much faster. I tried process.exit() at the end of each module, however, this killed the thread before all of the actions could be completed.
  FIGURE OUT HOW TO MAKE EACH MODULE RUN ASYNC AND KILL THE THREAD UPON RESOLVED PROMISE.

  Look into putting the table creation and insertion into a transaction in case an error is ever thrown in the initial setup.