package com.hitachi.register;

public class RegisterDeo {
    private String name;

    private String email;
    private String password;
    private int phone_no;

    private byte[] image;


    public RegisterDeo(String name, String email, String password, int phone_no,byte[] image) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone_no = phone_no;
        this.image=image;
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

    public int getPhone_no() {
        return phone_no;
    }

    public void setPhone_no(int phone_no) {
        this.phone_no = phone_no;
    }

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }
}
