package com.hitachi.register;


import com.fasterxml.jackson.databind.annotation.JsonPOJOBuilder;
import jakarta.persistence.*;

import java.util.Arrays;


@Entity
@Table(name="register")
//@Builder

public class RegisterEntity {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private long id;
    @Column(name="name")
    private String name;
    @Column(name="email")
    private String email;
    @Column(name="password")
    private String password;
    @Column(name="phone_no")
    private long phone_no;


    @Column(name="image")
    private byte[] image;




    public RegisterEntity(){}

    public RegisterEntity(long id, String name, String email, String password, long phone_no,byte[] image) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone_no = phone_no;
        this.image=image;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public long getPone_no() {
        return phone_no;
    }

    public void setPone_no(long pone_no) {
        this.phone_no = pone_no;
    }

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }

    @Override
    public String toString() {
        return "RegisterEntity{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", pone_no=" + phone_no +
                ", image=" + Arrays.toString(image) +
                '}';
    }
}
