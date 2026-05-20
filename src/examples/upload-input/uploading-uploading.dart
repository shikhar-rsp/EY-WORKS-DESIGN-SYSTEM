import 'package:flutter/material.dart';

class UploadingUploading extends StatelessWidget {
  const UploadingUploading({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 360,
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(
        border: Border.all(color: const Color(0xFFD1D5DB)),
        borderRadius: BorderRadius.circular(8),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Container(
                width: 36,
                height: 36,
                decoration: BoxDecoration(
                  color: const Color(0xFFE0E3F6),
                  borderRadius: BorderRadius.circular(4),
                ),
                child: const Icon(
                  Icons.insert_drive_file_outlined,
                  size: 18,
                  color: Color(0xFF505EAC),
                ),
              ),
              const SizedBox(width: 10),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: const [
                    Text(
                      'Untitled File.pdf',
                      style: TextStyle(
                        fontSize: 13,
                        fontWeight: FontWeight.w500,
                        color: Color(0xFF1A1A1A),
                      ),
                    ),
                    SizedBox(height: 2),
                    Text(
                      '60 KB of 18MB · Uploading...',
                      style: TextStyle(
                        fontSize: 11,
                        color: Color(0xFF6B7280),
                      ),
                    ),
                  ],
                ),
              ),
              IconButton(
                onPressed: null,
                icon: const Icon(Icons.close, size: 14),
                color: const Color(0xFF6B7280),
                padding: const EdgeInsets.all(4),
                constraints: const BoxConstraints(),
              ),
            ],
          ),
          const SizedBox(height: 8),
          ClipRRect(
            borderRadius: BorderRadius.circular(99),
            child: LinearProgressIndicator(
              value: 0.4,
              minHeight: 4,
              backgroundColor: const Color(0xFFF4F4F4),
              valueColor:
                  const AlwaysStoppedAnimation<Color>(Color(0xFF505EAC)),
            ),
          ),
        ],
      ),
    );
  }
}
