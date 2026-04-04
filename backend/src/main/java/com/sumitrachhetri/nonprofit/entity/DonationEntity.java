package com.sumitrachhetri.nonprofit.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

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

  public Long getId() { return id; }
  public String getType() { return type; }
  public void setType(String type) { this.type = type; }
  public double getAmount() { return amount; }
  public void setAmount(double amount) { this.amount = amount; }
  public LocalDateTime getCreationDate() { return creationDate; }
  public void setCreationDate(LocalDateTime creationDate) { this.creationDate = creationDate; }
  public LocalDateTime getCancellationDate() { return cancellationDate; }
  public void setCancellationDate(LocalDateTime cancellationDate) { this.cancellationDate = cancellationDate; }
}