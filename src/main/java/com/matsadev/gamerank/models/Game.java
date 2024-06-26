package com.matsadev.gamerank.models;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.matsadev.gamerank.models.dtos.GameDto;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "games")
@Getter
@Setter
@EqualsAndHashCode(of = "id")
@NoArgsConstructor
@AllArgsConstructor
public class Game implements Serializable {
    public static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank
    private String name;
    private String release_year;
    private String genre;
    private double avg_note;
    private String url_image;
    @Column(length = 30000)
    private String description;

    @JsonIgnore
    @OneToMany(mappedBy = "game") //Um Game pode ter várias Reviews
    private Set<Review> reviews = new HashSet<>();

    @JsonIgnore
    @OneToMany(mappedBy = "id.game") //acessando o campo games da WishlistPk pela Wishlist
    private Set<Wishlist> wishlists = new HashSet<>();

    //conversion GameDto to Game
    public Game(GameDto dto) {
        this.name = dto.name();
        this.release_year = dto.release_year();
        this.genre = dto.genre();
        this.url_image = dto.url_image();
        this.description  = dto.description();
    }

}
