
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
- Didn't get '%h1 #{@anything} something more...' to work yet
- Simple Form is saving successfully
- Cocoon is adding & removing fields successfully
- Have ghosting DOM issues still!
- ...small clue ...slim demo uses "==" on rendering & there's weird html 4 digit codes with & or ; signs demarking them
- ...tried "= (render stuff).html_safe" 
- .... "link_to_add_association(stuff).html_safe"
- .... found jquery called twice somewhere in the application!
- 
- 2nd possible lead... from _form on slim demo "" == render :partial => 'shared/flashes' ""
- 
- 3rd possible lead... my test projects all have index specified via scaffold in the schema.rb, slim-cocoon demo doesn't
- 
- 4th possible lead... bootstrap isn't actually in slim demo!!
- -
- 5th diff:  he doesn't use model belongs_to or at all expect in model/project.rb
-   ... except task & sub_task which point at each other as expected
-   
- 6th diff:  what is the #push in slim demo?

## Other information

- Apparently the normal, non-bootstrap works without these issues.



## To do

- Remove gems for bootstrap / sass maybe to see what CDN?
- Pulled jquery-ui something....//= require jquery_ujs....might need to put it in and take out the jquery....as there's a double somewhere

## Done

- set turbolinks to false in both spots on the layouts/application.html.haml & then removed the CDN bootstrap themes
- removed the sprockets reference from the application.js & then removed the turbolinks from it too along with prior steps
- removed "gem 'bootswatch-rails', '~> 3.2.0' # more themes" from the gemfile