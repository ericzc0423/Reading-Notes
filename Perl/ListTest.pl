#!/usr/bin/perl
#use strict;
use warnings FATAL => 'all';

@rocks = qw{ flintstone slate rubble };

print "quartz @rocks limestone\n";

# @fred = qw(hello dolly);
# $y = 2;
# $x = "This is $fred[1]'s place";

@fred = qw(eating rocks is wrong);
$fred = "right";
print "this is $fred[3]\n";

foreach $rock (qw/ bedrock slate lava /) {
    print "One rock is $rock.\n"; # Prints names of three rocks
}

@rocks = qw/ bedrock slate lava /;
foreach $rock (@rocks) {
    $rock = "\t$rock";
    $rock .= "\n";
}
print "The rocks are:\n",

# foreach(1..10){
#     print "I can count to $_!\n";
# }



 $_ = "Yabba dabba doo\n";
print;

@fred = 6..10;
print @fred ."\n";
@barney = reverse(@fred);
print @barney;