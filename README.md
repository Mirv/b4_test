# Test Group #4 -- confirming changes & understanding of them

- Issue #1 - resolved
- Issue #2 - A - resolved - went over all the css & found no implicit hooks
  - Question #2 - B - need to read more jquery/javascript
  - - Is the childselector in the ".on" required for cocoon to grab on too?
  - Question #2 - C - Why slim demo use .bind & not .on like my projtect requires?

# Tracking

## Done

  - adjusted top/bottom margin by a few points.
  - added list-group & list-group-items to the _form.html
  - Removed another html_safe
  - https://github.com/Mirv/b4_test/pull/1/commits
- views/continent/Forms.html
  - .row appears to have no effect on .links in the form
  - kept the offset prop for the add region, but made it 0 to pad slightly
  - moved add regions into the div for list-group
  - moved, added update continent link as list-group-item
- layout/Application.html
  - #push in layouts/application.html ... removal has no effect to add/remove
- continent.js
  - Changed the '.regions' to 'regions' as 'form' didn't have it either
  - ... $(document).on('cocoon:after-insert', 'regions', function(e,country_to_be_added) {
  - ... apparently not necessary for the level of code I'm writing, prehaps mis-reading intent
  - ... what if intent is to bind to the form object, rather than to div tag on partial named form

## To do

- Tons of stuff
 - add in callback for removing the link in project.js

## Old Update 12/14/2016

### Issue #1 - resolved on master branch - Clicking once will add two new fields to the form

- Pre-gem pulling (ignore name) holds the bugged behavior with turbolinks

- Issue was turbolinks fighting with the jquery.  See /app/view/layouts 
- ... application.html & the duplicate file with it

### Issue #2 - fixed, but questions - event call backs not always firing predictably

- cocoon master corrected several typo's
- verified css
- verified one div indent ('workspace') was unnecessary, possibly causing issues
 
#### Issue #2 - B - No documentation of second argument 

- Probably a basic javascript/jquery thing I haven't learned yet
- Couldn't find on splash page for cocoon (https://github.com/nathanvda/cocoon)
- ...where they listed the <<'form'>> in documentation...probably an issue I'll 
- ...see later...
- ...  $(document).on('<hook>', <<'form'>>, <function(e, <something>)> {
- ...also no shown in the SLIM demo project

#### Issue #2 - C - Slim Demo's project.js doesn't use .on, but rather bind ...

- why?




# Previous readme

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
- 2nd possible lead... from _form on slim demo "" == render :partial => 'shared/flashes' ""
- 3rd possible lead... my test projects all have index specified via scaffold in the schema.rb, slim-cocoon demo doesn't
- 4th possible lead... bootstrap isn't actually in slim demo!!
- 5th diff:  he doesn't use model belongs_to or at all expect in model/project.rb
-   ... except task & sub_task which point at each other as expected
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