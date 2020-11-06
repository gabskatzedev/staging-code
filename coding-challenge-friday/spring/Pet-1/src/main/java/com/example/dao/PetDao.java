package com.example.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.example.model.Pet;

public interface PetDao extends CrudRepository<Pet, Integer> {

	public List<Pet> findAll();
	public List<Pet> findByOrderByPetNameAsc();
	
	public Pet findByPetId(int petId);
	public Pet findByPetName(String petName);
	
	public List<Pet> findByAnimalType(String animalType);
	
}
