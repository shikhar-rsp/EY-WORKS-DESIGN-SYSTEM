import 'package:flutter/material.dart';

class AvatarGroupExample extends StatelessWidget {
  const AvatarGroupExample({super.key});

  @override
  Widget build(BuildContext context) {
    const members = ['AC', 'MH', 'JD', 'SR'];
    const overflowCount = 2;

    return Row(
      mainAxisSize: MainAxisSize.min,
      children: [
        ...members.asMap().entries.map((e) => Transform.translate(
          offset: Offset(e.key * -8.0, 0),
          child: Container(
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              border: Border.all(color: Colors.white, width: 2),
            ),
            child: Container(
              width: 32, height: 32,
              decoration: const BoxDecoration(
                color: Color(0xFFFEE4DF), // --primary-subtle
                shape: BoxShape.circle,
              ),
              alignment: Alignment.center,
              child: Text(
                e.value,
                style: const TextStyle(
                  fontFamily: 'Lexend', fontSize: 12,
                  fontWeight: FontWeight.w500,
                  color: Color(0xFF2E2B2B),
                ),
              ),
            ),
          ),
        )),
        Transform.translate(
          offset: const Offset(members.length * -8.0, 0),
          child: Container(
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              border: Border.all(color: Colors.white, width: 2),
            ),
            child: Container(
              width: 32, height: 32,
              decoration: const BoxDecoration(
                color: Color(0xFFFAFAFA), // --muted
                shape: BoxShape.circle,
              ),
              alignment: Alignment.center,
              child: const Text(
                '+2',
                style: TextStyle(
                  fontFamily: 'Lexend', fontSize: 12,
                  fontWeight: FontWeight.w500,
                  color: Color(0xFF7A7272),
                ),
              ),
            ),
          ),
        ),
      ],
    );
  }
}
