package com.kal.web.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kal.web.domain.MyReservationView;
import com.kal.web.mapper.ReservedSeatMapper;


@Service	
public class StatisticService {
	
	@Autowired ReservedSeatMapper mapper;
	
	public List<MyReservationView> statisticView(Map<String,Object> hashMap) throws Exception{
		IListService service=(paramMap)->mapper.findStatisticView(paramMap);
		@SuppressWarnings("unchecked")
		List<MyReservationView> list= (List<MyReservationView>) service.execute(hashMap);
		return list;
	}
}
