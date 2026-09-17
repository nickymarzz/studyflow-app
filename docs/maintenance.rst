Maintenance and Troubleshooting
===============================

This guide covers common issues, maintenance tasks, and troubleshooting for StudyFlow.

Core Application Troubleshooting
---------------------------------

Port 3000 Already in Use
~~~~~~~~~~~~~~~~~~~~~~~~

**Problem**: Starting ``npm run dev:app`` indicates port 3000 is occupied.

**Solution**: Run http-server on an alternative port::

    npx http-server public -p 3001 -c-1

Resetting Local Data
~~~~~~~~~~~~~~~~~~~~

**Problem**: Need to reset test data or restore the default board.

**Solution**: Open Developer Tools (``F12``) -> **Application** -> **Storage** -> **Local storage** -> select ``http://localhost:3000`` and clear items, or run in the Console::

    localStorage.clear();
    location.reload();

Notification Permissions Blocked
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Problem**: Task reminders do not trigger desktop notifications.

**Solution**: Click the padlock / tune icon in your browser's address bar next to ``localhost:3000``, ensure **Notifications** is set to **Allow**, and refresh the page.

Jekyll Website Issues
---------------------

Jekyll Won't Start
~~~~~~~~~~~~~~~~~~

**Problem**: ``bundle exec jekyll serve`` fails to start

**Solutions**:

1. Check Ruby and Bundler installation::

    ruby --version
    bundle --version

2. Install gems in the ``website/`` directory::

    cd website
    bundle install

3. Clear Jekyll cache::

    cd website
    bundle exec jekyll clean
    bundle exec jekyll serve

Documentation Build Issues
--------------------------

Sphinx Build Fails (Missing roman_numerals)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Problem**: Sphinx 9.x throws ``No module named 'roman_numerals'`` when running ``make html``.

**Solution**: Install or reinstall the ``roman-numerals-py`` package::

    pip install -U roman-numerals-py

Missing Sphinx Dependencies
~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Problem**: Import errors or missing theme when building documentation.

**Solution**: Install requirements from the repository root::

    pip install -r docs/requirements.txt
    npm run dev:docs

Git and GitHub Issues
---------------------

Merge Conflicts
~~~~~~~~~~~~~~~

**Problem**: Merge conflicts when pulling changes

**Solutions**:

1. Stash your changes::

    git stash
    git pull
    git stash pop

2. Or resolve conflicts manually::

    git pull
    # Edit conflicted files
    git add .
    git commit -m "Resolve merge conflicts"

Large Files
~~~~~~~~~~~

**Problem**: Can't push large files

**Solution**: Use Git LFS or add to .gitignore::

    echo "large-file.pdf" >> .gitignore
    git rm --cached large-file.pdf

Regular Maintenance Tasks
-------------------------

Daily
~~~~~

* Monitor error logs
* Check system resources (CPU, memory, disk)
* Review user-reported issues

Weekly
~~~~~~

* Update dependencies::

    bundle update  # Jekyll
    npm update     # Node.js (future)

* Review and merge pull requests
* Check for security updates

Monthly
~~~~~~~

* Database backup verification (future)
* Performance review and optimization
* Documentation updates
* Community engagement (Discord, GitHub)

Quarterly
~~~~~~~~~

* Major dependency updates
* Security audit
* User feedback review
* Roadmap planning

Backup and Recovery
-------------------

Backing Up Jekyll Site
~~~~~~~~~~~~~~~~~~~~~~

The Jekyll site is in Git, so regular commits serve as backups::

    git add .
    git commit -m "Backup: $(date)"
    git push

Backing Up Documentation
~~~~~~~~~~~~~~~~~~~~~~~~

Documentation source is also in Git. ReadTheDocs builds are automatic.

Monitoring and Logs
-------------------

Jekyll Logs
~~~~~~~~~~~

Jekyll outputs logs to console. Redirect to file::

    bundle exec jekyll serve > jekyll.log 2>&1

Health Checks
~~~~~~~~~~~~~

**Website availability**::

    curl -I https://studyflow-app.github.io

Security Maintenance
--------------------

Dependency Updates
~~~~~~~~~~~~~~~~~~

Check for security vulnerabilities::

    # Ruby
    bundle audit
    
    # Node.js
    npm audit
    npm audit fix

Getting Help
------------

If you can't resolve an issue:

* Check the :doc:`faq`
* Search `GitHub Issues <https://github.com/nickymarzz/studyflow-app/issues>`_
* Ask on `Discord <https://discord.gg/v2ctzYdp>`_
* Open a new issue with detailed information

Reporting Bugs
--------------

When reporting bugs, include:

1. **Environment**: OS, Ruby/Node.js version, browser
2. **Steps to reproduce**
3. **Expected vs actual behavior**
4. **Error messages and logs**
5. **Screenshots** (if applicable)

See :doc:`contributing` for more details on bug reports.
