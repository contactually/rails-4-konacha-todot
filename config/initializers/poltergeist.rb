# possible options:
# { js_errors: false }  -- don't reraise JS errors into ruby-land when running specs
# { debug: true }       -- view debug output when running konacha in terminal
Capybara.register_driver :poltergeist do |app|
  Capybara::Poltergeist::Driver.new(app, {})
end if defined?(Capybara)
