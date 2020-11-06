package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.dao.PetDao;
import com.example.model.Pet;
import com.example.model.ResponseMessage;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="*")
public class PetController {
	
	PetDao petDao;
	
	@Autowired
	public PetController(PetDao petDao) {
		this.petDao = petDao;
	}

	/*
	 * URL to reach this method:
	 * 			localhost:9020/pet-one/api/allpets
	 */
	@GetMapping("/allpets")
	public List<Pet> allPets(){
		
		return petDao.findAll();
	}
	
	
	/*
	 * URL to reach this method:
	 * 			localhost:9020/pet-one/api/registerpet
	 */
	@PostMapping("/registerpet")
	public ResponseMessage registerPet(@RequestBody Pet incomingPet) {
		
		petDao.save(incomingPet);
		
		return new ResponseMessage("Successfully Registered Your Pet");
	}
	
	/*
	 * URL to reach this method:
	 * 			localhost:9020/pet-one/api/getPetsByAnimalType
	 */
	@GetMapping("/getPetsByAnimalType/{animalType}")
	public List<Pet> getPetsByAnimalType(@PathVariable("animalType") String animalType){
		return petDao.findByAnimalType(animalType);
	}
	
	
}
