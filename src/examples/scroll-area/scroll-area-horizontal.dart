import 'package:flutter/material.dart';

class ScrollAreaHorizontal extends StatelessWidget {
  const ScrollAreaHorizontal({super.key});

  static const _works = [
    'Artwork 1', 'Artwork 2', 'Artwork 3', 'Artwork 4',
    'Artwork 5', 'Artwork 6', 'Artwork 7', 'Artwork 8',
  ];

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 256,
      decoration: BoxDecoration(
        border: Border.all(color: const Color(0xFFEBE9E8)), // --border
        borderRadius: BorderRadius.circular(8), // --radius-medium
      ),
      clipBehavior: Clip.hardEdge,
      child: SingleChildScrollView(
        scrollDirection: Axis.horizontal,
        padding: const EdgeInsets.all(12),
        child: Row(
          children: _works
              .map((work) => Container(
                    margin: const EdgeInsets.only(right: 12),
                    width: 112,
                    height: 64,
                    decoration: BoxDecoration(
                      color: const Color(0xFFF4F4F4), // --secondary
                      borderRadius: BorderRadius.circular(8), // --radius-medium
                    ),
                    child: Center(
                      child: Text(
                        work,
                        style: const TextStyle(
                          fontSize: 12,
                          fontWeight: FontWeight.w500,
                          color: Color(0xFF505258), // --secondary-foreground
                          fontFamily: 'Lexend',
                        ),
                      ),
                    ),
                  ))
              .toList(),
        ),
      ),
    );
  }
}
