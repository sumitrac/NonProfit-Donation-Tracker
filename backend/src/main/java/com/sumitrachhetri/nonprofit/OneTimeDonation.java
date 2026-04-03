package com.sumitrachhetri.nonprofit;

import java.time.LocalDateTime;

/**
 * The OneTimeDonation class represents a one-time donation made to a non-profit organization.
 * It extends BaseDonation and implements the getAmountForYear method to return the donation amount
 * if the creation year matches the specified year, otherwise it returns 0.0.
 */
public class OneTimeDonation extends BaseDonation {

  /**
   * Instantiates a new One time donation.
   * @param amount   the amount as double
   * @param dateTime the date time as LocalDateTime
   */
  public OneTimeDonation(final double amount, final LocalDateTime dateTime) {
    super(amount, dateTime);
  }

  /**
   * getAmountForYear returns the donation amount if the creation year matches the specified year,
   * otherwise it returns 0.0.
   * The amount return as double
   */
  @Override
  public double getAmountForYear(int year) {
    if (this.getCreationDate().getYear() == year) {
      return (int) this.getAmount();
    } else {
      return 0.0;
    }
  }
}
