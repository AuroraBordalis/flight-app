package com.shawn.projects.flightManagementSystem.services;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.List;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.DataFormat;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;


import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import com.shawn.projects.flightManagementSystem.model.Airport;
import com.shawn.projects.flightManagementSystem.model.Flight;
import com.shawn.projects.flightManagementSystem.model.Reservation;
import com.shawn.projects.flightManagementSystem.model.User;

public class ExcelHelper {
	public static String TYPE = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
	static String[][] Headers = {{"Airport Code","Name","Location","Other"},
								 {"Flight Number","Airline Code","Aircraft Code","Origin","Destination","Departure","Arrival","Fare"},
								 {"Id","Flight Number","First Name","Last Name","Date Made"},
								 {"Id","username","email","password"}};
	static String[] Sheets = {"Airports","Flights","Reservations","Users"};
	public static ByteArrayInputStream dataToExcel(List<Airport> airports, List<Flight> flights, List<Reservation> reservations, List<User> users) {
		
		try(Workbook workbook = new XSSFWorkbook(); ByteArrayOutputStream out = new ByteArrayOutputStream();){
			Sheet sheet = workbook.createSheet(Sheets[0]);
			
			CellStyle cellStyle = workbook.createCellStyle();
			DataFormat format = workbook.createDataFormat();
			cellStyle.setDataFormat(format.getFormat("m/d/yy h:mm"));

		      // Header
			Row headerRow = sheet.createRow(0);

			for (int col = 0; col < Headers[0].length; col++) {
				Cell cell = headerRow.createCell(col);
		        cell.setCellValue(Headers[0][col]);
			}

			int rowIdx = 1;
			for (Airport airport : airports) {
				Row row = sheet.createRow(rowIdx++);

		        row.createCell(0).setCellValue(airport.getAirportCode());
		        row.createCell(1).setCellValue(airport.getAirportName());
		        row.createCell(2).setCellValue(airport.getAirportLocation());
		        row.createCell(3).setCellValue(airport.getOtherDetails());
		    }
			
			
			Sheet sheetFlight = workbook.createSheet(Sheets[1]);
			Row headerFlightRow = sheetFlight.createRow(0);
			for(int col = 0; col < Headers[1].length; col++) {
				Cell cell = headerFlightRow.createCell(col);
				cell.setCellValue(Headers[1][col]);
			}
				
			
			
			rowIdx = 1;
			for(Flight flight : flights) {
				Row row = sheetFlight.createRow(rowIdx++);
				row.createCell(0).setCellValue(flight.getFlightNumber());
		        row.createCell(1).setCellValue(flight.getAirlineCode());
		        row.createCell(2).setCellValue(flight.getUsualAircraftCode());
		        row.createCell(3).setCellValue(flight.getOriginAirportCode());
		        row.createCell(4).setCellValue(flight.getDestinationAirportCode());
		        
		        row.createCell(5).setCellValue(flight.getDepartureDateTime());
		        row.createCell(6).setCellValue(flight.getArrivalDateTime());
		        row.createCell(7).setCellValue(flight.getFare());
		        
		        
		        row.getCell(5).setCellStyle(cellStyle);
		        row.getCell(6).setCellStyle(cellStyle);
			}
			
			Sheet sheetReservation = workbook.createSheet(Sheets[2]);
			Row headerReservationRow = sheetReservation.createRow(0);
			for(int col = 0; col < Headers[2].length; col++) {
				Cell cell = headerReservationRow.createCell(col);
				cell.setCellValue(Headers[2][col]);
			}
				
			
			
			rowIdx = 1;
			for(Reservation reservation : reservations) {
				Row row = sheetReservation.createRow(rowIdx++);
				row.createCell(0).setCellValue(reservation.getId());
		        row.createCell(1).setCellValue(reservation.getFlightNumber());
		        row.createCell(2).setCellValue(reservation.getFirstName());
		        row.createCell(3).setCellValue(reservation.getLastName());
		        
		        row.createCell(4).setCellValue(reservation.getDateReservationMade());
		        row.getCell(4).setCellStyle(cellStyle);
		        
		        
			}
			
			Sheet userSheet = workbook.createSheet(Sheets[3]);
			Row userRow = userSheet.createRow(0);
			for(int col = 0; col < Headers[3].length; col++) {
				Cell cell = userRow.createCell(col);
				cell.setCellValue(Headers[3][col]);
			}
				
			
			
			rowIdx = 1;
			for(User user : users) {
				Row row = userSheet.createRow(rowIdx++);
				row.createCell(0).setCellValue(user.getId());
		        row.createCell(1).setCellValue(user.getUsername());
		        row.createCell(2).setCellValue(user.getEmail());
		        row.createCell(3).setCellValue(user.getPassword());
		        
		        
			}
			workbook.write(out);
			return new ByteArrayInputStream(out.toByteArray());
			
		}catch(IOException e) {
			throw new RuntimeException("failt to import datat to excel" + e.getMessage());
		}
		
	}

}
