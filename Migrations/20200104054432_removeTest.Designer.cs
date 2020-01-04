﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Zachariasz_Jankowski.Data;

namespace Zachariasz_Jankowski.Migrations
{
    [DbContext(typeof(DataDbContext))]
    [Migration("20200104054432_removeTest")]
    partial class removeTest
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.0.1");

            modelBuilder.Entity("Zachariasz_Jankowski.Models.Like", b =>
                {
                    b.Property<string>("username")
                        .HasColumnType("TEXT");

                    b.Property<int>("post")
                        .HasColumnType("INTEGER");

                    b.HasKey("username", "post");

                    b.ToTable("like");
                });

            modelBuilder.Entity("Zachariasz_Jankowski.Models.Posts", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("Likes")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Photo")
                        .HasColumnType("TEXT");

                    b.Property<string>("ProfilePhoto")
                        .HasColumnType("TEXT");

                    b.Property<string>("Time")
                        .HasColumnType("TEXT");

                    b.Property<string>("Username")
                        .HasColumnType("TEXT");

                    b.Property<string>("content")
                        .HasColumnType("TEXT");

                    b.Property<bool>("liked")
                        .HasColumnType("INTEGER");

                    b.Property<int>("ol")
                        .HasColumnType("INTEGER");

                    b.Property<string>("source")
                        .HasColumnType("TEXT");

                    b.Property<int>("type")
                        .HasColumnType("INTEGER");

                    b.HasKey("id");

                    b.ToTable("posts");
                });
#pragma warning restore 612, 618
        }
    }
}
