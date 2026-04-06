package com.sumitrachhetri.nonprofit.controller;

import com.sumitrachhetri.nonprofit.entity.DonationEntity;
import com.sumitrachhetri.nonprofit.service.DonationService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

/**
 * The type Donation controller.
 */
@RestController
@RequestMapping("/api/donations")
//@CrossOrigin(origins = "*")
@CrossOrigin(origins = "https://donation-tracker-frontend.onrender.com")
public class DonationController {

  private final DonationService donationService;

  /**
   * Instantiates a new Donation controller.
   *
   * @param donationService the donation service
   */
  public DonationController(DonationService donationService) {
    this.donationService = donationService;
  }

  /**
   * Gets all donations.
   *
   * @return the all donations
   */
  @GetMapping
  public List<DonationEntity> getAllDonations() {
    return donationService.getAllDonations();
  }

  /**
   * Add donation donation entity.
   *
   * @param donation the donation
   * @return the donation entity
   */
  @PostMapping
  public DonationEntity addDonation(@RequestBody DonationEntity donation) {
    return donationService.saveDonation(donation);
  }

  /**
   * Gets total for year.
   *
   * @param year the year
   * @return the total for year
   */
  @GetMapping("/total")
  public double getTotalForYear(@RequestParam int year) {
    return donationService.getTotalForYear(year);
  }
}