require 'bundler'

desc "Compile stylesheets"
task :css do
  dest = "docs/css/foundation-mobile.css"
  puts "Compiling SCSS to #{dest}"
  `scss scss/foundation-mobile.scss #{dest}`
  puts "\e[32mDone!\e[0m"
end

desc "Compile javascripts"
task :js do
  dest = "docs/js/foundation-mobile.js"
  puts "Compiling JS to #{dest}"
  `sprockets -I js/ js/foundation-mobile/index.js > #{dest}`
  puts "\e[32mDone!\e[0m"
end

task :compile => [:css, :js]
