package com.sumitrachhetri.nonprofit.service;

import com.sumitrachhetri.nonprofit.entity.DonationEntity;
import com.sumitrachhetri.nonprofit.repository.DonationRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class DonationService {

  private final DonationRepository donationRepository;

  public DonationService(DonationRepository donationRepository) {
    this.donationRepository = donationRepository;
  }

  public List<DonationEntity> getAllDonations() {
    return donationRepository.findAll();
  }

  public DonationEntity saveDonation(DonationEntity donation) {
    return donationRepository.save(donation);
  }

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