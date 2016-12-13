
     ,-----.,--.                  ,--. ,---.   ,--.,------.  ,------.
    '  .--./|  | ,---. ,--.,--. ,-|  || o   \  |  ||  .-.  \ |  .---'
    |  |    |  || .-. ||  ||  |' .-. |`..'  |  |  ||  |  \  :|  `--, 
    '  '--'\|  |' '-' ''  ''  '\ `-' | .'  /   |  ||  '--'  /|  `---.
     `-----'`--' `---'  `----'  `---'  `--'    `--'`-------' `------'
    ----------------------------------------------------------------- 

## Support & Documentation

Visit http://docs.c9.io for support, or to learn more about using Cloud9 IDE. 
To watch some training videos, visit http://www.youtube.com/user/c9ide

## List

- Bootstrap
-- gem 'bootstrap-sass', '~> 3.3.6'
-- gem 'sass-rails', '>= 3.2'
-- @import "bootstrap-sprockets"; & @import "bootstrap";

- Cocoon gem

- haml
- simpleForm - might not be installed fully with bootstrap - ran --bootstrap though

## Status

- Bootstrap via CDN working, not much templating done thus far
- HAML + simpleform rendering of partials without locals successful.
- Didn't get '%h1 #{@anything} something more ' to work yet
- apparently the continent & read models aren't related according to region ...
- ...partial as I try to run simpleForm f.association ... checked schema for ...
- ...bad caps, ditto models.  Interestingly, I can use region controller to ...
- ...make / assign new regions to the contients that exist