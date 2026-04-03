package com.sumitrachhetri.nonprofit;

/**
 * The interface Donation interface represents a donation made to a non-profit organization.
 * the total contribution for a specific calendar year.
 */
public interface IDonation {

    /**
     * Calculates the total amount of donation for year as double
     * @param year the year as int
     * @return the total amount for year as double
     */
    double getAmountForYear(int year);
  }

