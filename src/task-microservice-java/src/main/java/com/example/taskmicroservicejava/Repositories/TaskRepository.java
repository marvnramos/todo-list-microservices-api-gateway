package com.example.taskmicroservicejava.Repositories;

import com.example.taskmicroservicejava.Models.TaskModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<TaskModel, Long> {
}
