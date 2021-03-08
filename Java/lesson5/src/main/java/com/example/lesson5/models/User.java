package com.example.lesson5.models;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
@ToString
public class User implements Comparable<User>{
    private int id;
    private String name;

    @Override
    public int compareTo(User o) {
        return this.id - o.id;
    }
}
