package com.sumitrachhetri.nonprofit.controller;

import com.sumitrachhetri.nonprofit.entity.DonationEntity;
import com.sumitrachhetri.nonprofit.service.DonationService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/donations")
@CrossOrigin(origins = "*")
public class DonationController {

  private final DonationService donationService;

  public DonationController(DonationService donationService) {
    this.donationService = donationService;
  }

  @GetMapping
  public List<DonationEntity> getAllDonations() {
    return donationService.getAllDonations();
  }

  @PostMapping
  public DonationEntity addDonation(@RequestBody DonationEntity donation) {
    return donationService.saveDonation(donation);
  }

  @GetMapping("/total")
  public double getTotalForYear(@RequestParam int year) {
    return donationService.getTotalForYear(year);
  }
}