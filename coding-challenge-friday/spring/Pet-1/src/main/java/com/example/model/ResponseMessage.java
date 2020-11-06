package com.example.model;

public class ResponseMessage {

	String myMessage;
	
	public ResponseMessage() {
	}

	public ResponseMessage(String myMessage) {
		super();
		this.myMessage = myMessage;
	}

	public String getMyMessage() {
		return myMessage;
	}

	public void setMyMessage(String myMessage) {
		this.myMessage = myMessage;
	}

	@Override
	public String toString() {
		return "ResponseMessage [myMessage=" + myMessage + "]";
	}
}
