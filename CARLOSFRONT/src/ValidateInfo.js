import React from "react";

export default function ValidateInfo(inputs) {
  let errors = {};

  // FIRST NAME
  if (!inputs.firstname.trim()) {
    errors.firstname = "error";
  } else {
    errors.firstname = "success";
  }

  // LASTNAME
  if (!inputs.lastname.trim()) {
    errors.lastname = "error";
  } else {
    errors.lastname = "success";
  }

  //JOB TITLE
  if (!inputs.jobtitle) {
    errors.jobtitle = "error";
  } else {
    errors.jobtitle = "success";
  }

  //COMPANY NAME
  if (!inputs.companyname) {
    errors.companyname = "error";
  } else {
    errors.companyname = "success";
  }

  //EMAIL
  if (!inputs.email) {
    errors.email = "error";
  } else if (!/\S+\S+\.\S+/.test(inputs.email)) {
    errors.email = "error";
  } else {
    errors.email = "success";
  }

  //PHONE
  if (!inputs.phone) {
    errors.phone = "error";
  } else {
    errors.phone = "success";
  }

  //MOBILE
  if (!inputs.mobile) {
    errors.mobile = "error";
  } else {
    errors.mobile = "success";
  }

  //POST BOX
  if (!inputs.postbox) {
    errors.postbox = "error";
  } else {
    errors.postbox = "success";
  }

  //USERNAME
  if (!inputs.username) {
    errors.username = "error";
  } else if (!/^[A-Za-z]+/.test(inputs.username.trim())) {
    errors.username = "error";
  } else {
    errors.username = "success";
  }

  //PASSWORD
  if (!inputs.password) {
    errors.password = "error";
  } else if (inputs.password.length < 6) {
    errors.password = "error";
  } else {
    errors.password = "success";
  }

  //CONFIRM PASSWORD
  if (!inputs.password2) {
    errors.password2 = "error";
  } else if (inputs.password2 !== inputs.password) {
    errors.password2 = "error";
  } else {
    errors.password2 = "success";
  }

  return errors;
}
