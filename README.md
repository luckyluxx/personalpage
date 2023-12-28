# How Nuxt 3 Works?
## The Routing
The Nuxt 3 filesystem routing use its folder as a route and it is automaticaly imported anywhere on the project. so bye bye "import from ..."

## The View
There is basicaly something like React where there be Components, Views and Hooks
but, in Nuxt thoose were called Components, Pages, and Composables. There is also layouts to define what layouts do the specific page is being use (whether its Dark or Light or somethings else in mind)

Quick Note !! component start with NameComponent not a nameComponent

## The public assets 
so in Nuxt exist two different folder called public/ and assets/ 
in my understanding that assets/ is the public/ file that would not being shown into the public(user) so it is more private.
ex: assets/ cannot be accesed with localhost:3000/assets/myFile.jpg

## The plugins and composables
a bit wordy tho, need more work on thoose things

## The middleware 
it is used to define what should and what shouldn't shown in the app based by auth
thingking about role of dakobc-webmanajemen