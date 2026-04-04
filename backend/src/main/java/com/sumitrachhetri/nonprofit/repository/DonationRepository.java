package com.sumitrachhetri.nonprofit.repository;

import com.sumitrachhetri.nonprofit.entity.DonationEntity;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * The interface Donation repository.
 */
public interface DonationRepository  extends JpaRepository<DonationEntity, Long> {

}
