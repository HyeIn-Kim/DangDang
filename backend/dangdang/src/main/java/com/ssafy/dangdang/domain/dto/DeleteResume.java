package com.ssafy.dangdang.domain.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
public class DeleteResume {

    @NotBlank
    private Long id;
}
