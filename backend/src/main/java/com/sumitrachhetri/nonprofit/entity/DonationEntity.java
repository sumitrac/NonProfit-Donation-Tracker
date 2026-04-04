package com.sumitrachhetri.nonprofit.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

/**
 * The type Donation entity.
 */
@Entity
@Table(name = "donations")
public class DonationEntity {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String type;
  private double amount;
  private LocalDateTime creationDate;
  private LocalDateTime cancellationDate;

  /**
   * Gets id.
   *
   * @return the id
   */
  public Long getId() { return id; }

  /**
   * Gets type.
   *
   * @return the type
   */
  public String getType() { return type; }

  /**
   * Sets type.
   *
   * @param type the type
   */
  public void setType(String type) { this.type = type; }

  /**
   * Gets amount.
   *
   * @return the amount
   */
  public double getAmount() { return amount; }

  /**
   * Sets amount.
   *
   * @param amount the amount
   */
  public void setAmount(double amount) { this.amount = amount; }

  /**
   * Gets creation date.
   *
   * @return the creation date
   */
  public LocalDateTime getCreationDate() { return creationDate; }

  /**
   * Sets creation date.
   *
   * @param creationDate the creation date
   */
  public void setCreationDate(LocalDateTime creationDate) { this.creationDate = creationDate; }

  /**
   * Gets cancellation date.
   *
   * @return the cancellation date
   */
  public LocalDateTime getCancellationDate() { return cancellationDate; }

  /**
   * Sets cancellation date.
   *
   * @param cancellationDate the cancellation date
   */
  public void setCancellationDate(LocalDateTime cancellationDate) { this.cancellationDate = cancellationDate; }
}