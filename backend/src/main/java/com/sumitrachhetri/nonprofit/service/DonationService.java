package com.sumitrachhetri.nonprofit.service;

import com.sumitrachhetri.nonprofit.entity.DonationEntity;
import com.sumitrachhetri.nonprofit.repository.DonationRepository;
import org.springframework.stereotype.Service;
import java.util.List;

/**
 * The type Donation service.
 */
@Service
public class DonationService {

  private final DonationRepository donationRepository;

  /**
   * Instantiates a new Donation service.
   *
   * @param donationRepository the donation repository
   */
  public DonationService(DonationRepository donationRepository) {
    this.donationRepository = donationRepository;
  }

  /**
   * Gets all donations.
   *
   * @return the all donations
   */
  public List<DonationEntity> getAllDonations() {
    return donationRepository.findAll();
  }

  /**
   * Save donation donation entity.
   *
   * @param donation the donation
   * @return the donation entity
   */
  public DonationEntity saveDonation(DonationEntity donation) {
    return donationRepository.save(donation);
  }

  /**
   * Gets total for year.
   *
   * @param year the year
   * @return the total for year
   */
  public double getTotalForYear(int year) {
    List<DonationEntity> donations = donationRepository.findAll();
    double total = 0.0;
    for (DonationEntity d : donations) {
      if (d.getCreationDate().getYear() == year) {
        total += d.getAmount();
      }
    }
    return total;
  }
}