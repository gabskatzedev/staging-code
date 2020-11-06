package com.example.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Pet")
public class Pet {
	
	@Id
	@Column(name="pet_id")
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int petId;
	
	@Column(name="pet_name", unique=true, nullable=false)
	private String petName;
	
	@Column(name="animal_type", nullable=false)
	private String animalType;
	
	public Pet() {
	}

	public Pet(int petId, String petName, String animalType) {
		super();
		this.petId = petId;
		this.petName = petName;
		this.animalType = animalType;
	}

	public int getPetId() {
		return petId;
	}

	public void setPetId(int petId) {
		this.petId = petId;
	}

	public String getPetName() {
		return petName;
	}

	public void setPetName(String petName) {
		this.petName = petName;
	}

	public String getAnimalType() {
		return animalType;
	}

	public void setAnimalType(String animalType) {
		this.animalType = animalType;
	}

	@Override
	public String toString() {
		return "\nPet [petId=" + petId + ", petName=" + petName + ", animalType=" + animalType + "]";
	}
	
}
