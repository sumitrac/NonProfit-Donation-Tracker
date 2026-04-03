package com.sumitrachhetri.nonprofit;
import java.util.ArrayList;
import java.util.List;

/**
 * The NonProfit class represents a non-profit organization that can receive donations.
 * It has properties for the organization's name and a list of donations.
 * The class provides methods to add donations and calculate the total donations for a specific year.
 */
public class NonProfit {

  private final String orgName;
  private final List<IDonation> donations;

  /**
   * Instantiates a new Non profit
   * @param orgName the org name as String
   */
  public NonProfit(String orgName) {
    this.orgName = orgName;
    this.donations = new ArrayList<>();
  }

  /**
   * Gets org name as String.
   * @return the org name as String
   */
  public String getOrgName() {
    return orgName;
  }

  /**
   * Gets donations as List of DonationInterface.
   * @return the donations as List of DonationInterface
   */
  public List<IDonation> getDonations() {
    return donations;
  }

  /**
   * Add donation.
   * @param donation the donation
   */
  public void addDonation(IDonation donation) {
    this.donations.add(donation);
  }

  /**
   * Gets total donations for year as double.
   * @param year the year as int
   * @return the total donations for year as double
   */
  public double getTotalDonationsForYear(final int year) {
    double total = 0.0;
    for (IDonation donation : donations) {
      total += donation.getAmountForYear(year);
    }
    return total;
  }
}
