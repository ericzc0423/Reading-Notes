#!/usr/bin/perl
#use strict;
use warnings FATAL => 'all';
$family_name{"fred"} = "flintstone";
$family_name{"barney"} = "rubble";

foreach $person(qw< barney fred>){
    print " I've heard  of $person $family_name{$person}.\n"
}

$foo = "bar";
print $family_name {$foo. "ney"};


%some_hash = ("foo", 35, "bar", 12.4, 2.5, "hello", "wilma", 1.72e30, "betty", "bye\n");
@any_array = %some_hash;
print "@any_array\n";



my %last_name = (
    "fred" => "flintstone",
    "dino" => undef,
    "barney" => "rubble",
    "betty" => "rubble",
);

my %hash = ("a" => 1, "b" => 2, "c" => 3);
my @k = keys %hash;
my @v = values %hash;

while ( ($key, $value) = each %hash ) {
    print "$key => $value\n";
}