package com.organogram.home;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

public class HomeControler {

  @RequestMapping(value = "/", method = RequestMethod.GET)
  public String home() {
    return "index";
  }
}
