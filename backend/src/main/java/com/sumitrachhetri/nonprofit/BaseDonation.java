package com.sumitrachhetri.nonprofit;

import java.time.LocalDateTime;
import java.util.Objects;

/**
 * The abstract class BaseDonation represents a base implementation of the DonationInterface
 * providing common properties and methods for different types of donations. It includes amount as
 * double It includes creationTime as LocalDateTime Subclasses can extend this class to implement
 * specific types of donations, such as one-time donations or pledges.
 */
public abstract class BaseDonation implements IDonation {
  private final double amount;
  private final LocalDateTime creationDateTime;

  /**
   * Instantiates a new Base donation.
   * @param amount           the amount as double
   * @param creationDateTime the creation date time as LocalDateTime
   */
  public BaseDonation(double amount, LocalDateTime creationDateTime) {
    this.amount = amount;
    this.creationDateTime = creationDateTime;
  }

  /**
   * Gets amount as double.
   * @return the amount as double
   */
  public double getAmount() {
    return amount;
  }

  /**
   * Gets creation date as LocalDateTime.
   * @return the creation date as LocalDateTime
   */
  public LocalDateTime getCreationDate() {
    return creationDateTime;
  }

  /**
   * Returns a string representation of the BaseDonation object,
   * including the amount and creation date.
   * @return a string representation of the BaseDonation object
   */
  @Override
  public String toString() {
    return "BaseDonation{" +
        "amount=" + amount +
        ", creationDateTime=" + creationDateTime +
        '}';
  }

  /**
   * Compares this BaseDonation to another object for equality based on the amount and creation date.
   * @param o the object to compare with
   * @return true if the objects are equal, false otherwise
   **/
  @Override
  public boolean equals(Object o) {
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    BaseDonation that = (BaseDonation) o;
    return Double.compare(amount, that.amount) == 0 && Objects.equals(
        creationDateTime, that.creationDateTime);
  }

  /**
   * Generates a hash code for the BaseDonation object based on the amount and creation date.
   * @return a hash code for the BaseDonation object
   **/
  @Override
  public int hashCode() {
    return Objects.hash(amount, creationDateTime);
  }
}
