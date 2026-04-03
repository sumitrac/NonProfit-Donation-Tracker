package com.sumitrachhetri.nonprofit;

import java.time.LocalDateTime;

/**
 * The Monthly donation class represents a recurring monthly donation made to a non-profit organization.
 * It extends BaseDonation and implements the getAmountForYear method to calculate the total contribution for a specific calendar year,
 * taking into account the creation date and any cancellation date.
 **/
public class MonthlyDonation extends BaseDonation {

  private static final int MONTHS_IN_YEAR = 12;

  private LocalDateTime cancellationDate;

  /**
   * Instantiates a new Monthly donation.
   * @param amount           the amount as double
   * @param creationTimeDate the creation time date as LocalDateTime
   */
  public MonthlyDonation(final double amount, final LocalDateTime creationTimeDate) {
    super(amount, creationTimeDate);
    this.cancellationDate = null; // Not cancelled initially
  }

  public LocalDateTime getCancellationDate() {
    return cancellationDate;
  }

  /**
   * Implements cancel method for the monthly donation by setting the cancellation date.
   * The cancellation date must be on or after the creation date.
   * @param date the date as LocalDateTime
   */
  public void cancel(final LocalDateTime date) {
    if (date.isBefore(getCreationDate())) {
      throw new IllegalArgumentException("Cancellation cannot be before creation.");
    }
    this.cancellationDate = date;
  }

  /**
   * Calculates the total amount for the year by counting the number of months
   * the donation was active.
   * Includes the creation month and continues until either the end of the year
   * or the month of cancellation.
   *
   * * @param year the year to calculate totals for
   * @return the sum of monthly donations made during the active period of that year
   */
  @Override
  public double getAmountForYear(final int year) {
    if (year < getCreationDate().getYear()) return 0.0;
    if (cancellationDate != null && year > cancellationDate.getYear()) return 0.0;

    final int startMonth = (getCreationDate().getYear() == year) ? getCreationDate().getMonthValue() : 1;

    final int endMonth = (cancellationDate != null && cancellationDate.getYear() == year)
        ? cancellationDate.getMonthValue() : MONTHS_IN_YEAR;

    int totalMonths = (endMonth - startMonth) + 1;
    return (totalMonths > 0) ? totalMonths * getAmount() : 0.0;
  }
}
