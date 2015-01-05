if defined?(Konacha)
  Konacha.configure do |config|
    config.spec_dir    = 'spec/javascripts'
    config.stylesheets = %w{application}
    config.javascripts = %w(chai konacha konacha/iframe)
    config.driver      = :poltergeist
  end
end
