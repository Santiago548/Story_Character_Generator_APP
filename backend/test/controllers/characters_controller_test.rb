require "test_helper"

class CharactersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @character = characters(:one)
  end

  test "should get index" do
    get characters_url, as: :json
    assert_response :success
  end

  test "should create character" do
    assert_difference('Character.count') do
      post characters_url, params: { character: { age: @character.age, alignment: @character.alignment, background: @character.background, charisma: @character.charisma, constitution: @character.constitution, dexterity: @character.dexterity, firstname: @character.firstname, intelligence: @character.intelligence, lastname: @character.lastname, race: @character.race, sex: @character.sex, storyhook: @character.storyhook, strength: @character.strength, trait1: @character.trait1, trait2: @character.trait2, wisdom: @character.wisdom } }, as: :json
    end

    assert_response 201
  end

  test "should show character" do
    get character_url(@character), as: :json
    assert_response :success
  end

  test "should update character" do
    patch character_url(@character), params: { character: { age: @character.age, alignment: @character.alignment, background: @character.background, charisma: @character.charisma, constitution: @character.constitution, dexterity: @character.dexterity, firstname: @character.firstname, intelligence: @character.intelligence, lastname: @character.lastname, race: @character.race, sex: @character.sex, storyhook: @character.storyhook, strength: @character.strength, trait1: @character.trait1, trait2: @character.trait2, wisdom: @character.wisdom } }, as: :json
    assert_response 200
  end

  test "should destroy character" do
    assert_difference('Character.count', -1) do
      delete character_url(@character), as: :json
    end

    assert_response 204
  end
end
