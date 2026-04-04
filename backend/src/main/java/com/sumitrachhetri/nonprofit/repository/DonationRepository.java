package com.sumitrachhetri.nonprofit.repository;

import com.sumitrachhetri.nonprofit.entity.DonationEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DonationRepository  extends JpaRepository<DonationEntity, Long> {

}
