json.array!(@characters) do |character|
  json.extract! character, :id, :image, :description, :name, :super_power
  json.url character_url(character, format: :json)
end
