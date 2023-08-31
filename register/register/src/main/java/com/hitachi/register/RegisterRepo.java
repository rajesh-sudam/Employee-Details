package com.hitachi.register;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface RegisterRepo extends JpaRepository<RegisterEntity,Long> {
}
