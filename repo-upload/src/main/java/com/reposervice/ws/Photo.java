package com.reposervice.ws;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.annotation.Id;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


@Getter
@Setter
@ToString
@Document(collection = "photo")
public class Photo {
	
	@Id
	private String Id;
	private String Pname;

	public Photo(String pname) {
	//	super();
		Pname = pname;
	}
}
