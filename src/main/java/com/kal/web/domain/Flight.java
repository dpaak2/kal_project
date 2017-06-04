package com.kal.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component @Data
public class Flight {
	private String flightSeq,flightName,flightType,seatCount;

	public String getFlightSeq() {
		return flightSeq;
	}

	public void setFlightSeq(String flightSeq) {
		this.flightSeq = flightSeq;
	}

	public String getFlightName() {
		return flightName;
	}

	public void setFlightName(String flightName) {
		this.flightName = flightName;
	}

	public String getFlightType() {
		return flightType;
	}

	public void setFlightType(String flightType) {
		this.flightType = flightType;
	}

	public String getSeatCount() {
		return seatCount;
	}

	public void setSeatCount(String seatCount) {
		this.seatCount = seatCount;
	}

}
