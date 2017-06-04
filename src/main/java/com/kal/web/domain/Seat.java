package com.kal.web.domain;

import org.springframework.stereotype.Component;
import lombok.Data;

@Component @Data
public class Seat {
	private String seatCode,seatRow,seatCol;

	public String getSeatCode() {
		return seatCode;
	}

	public void setSeatCode(String seatCode) {
		this.seatCode = seatCode;
	}

	public String getSeatRow() {
		return seatRow;
	}

	public void setSeatRow(String seatRow) {
		this.seatRow = seatRow;
	}

	public String getSeatCol() {
		return seatCol;
	}

	public void setSeatCol(String seatCol) {
		this.seatCol = seatCol;
	}
}